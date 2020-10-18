import { LocalStorage } from "utils";

namespace Model {
    let _writingIds: any[];
    let _writingLastId: string;

    async function getWritingIds() {
        if(_writingIds === undefined) {
            _writingIds = (await LocalStorage.getJson('writingIds')) || [];
        }
        return _writingIds;
    }

    async function getLastId() {
        if(_writingLastId === undefined) {
            _writingLastId = (await LocalStorage.get('writingLastIds')) || `${0}`;
        }
        return _writingLastId;
    }

    async function getNewId() {
        return `${parseInt(await getLastId(),10)+1}`;
    }

    async function setLastId(id: string) {
        await LocalStorage.set('writingLastIds', id);
        _writingLastId = id;
    }

    export async function getWritings(page = 1, pageSize = 20) {
        const writingIds = await getWritingIds();
        const result = await Promise.all(
            [...Array(pageSize).keys()]
                .map(key => writingIds[key + (page - 1) * pageSize])
                .filter(id => !!id)
                .map(id =>
                    LocalStorage.getJson(`writing:${id}`)
                )
        );
        return {
            data: result.filter(writing => !!writing),
            page,
            pageSize,
            totalCount: writingIds.length,
        }
    }

    export async function saveWritings(data: object): Promise<void>
    export async function saveWritings(id: string, data: object): Promise<void>
    export async function saveWritings(...args: any): Promise<void> {
        let id = (typeof args[0] === 'string') ? args[0] : await getNewId();
        const data = (typeof args[0] === 'string') ? args[1] : args[0];

        await LocalStorage.setJson(id, {id: id, ...data});
        await setLastId(id);
    }
}

export default Model;