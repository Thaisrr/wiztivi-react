import {describe, it, expect, beforeEach, vi, afterEach} from "vitest";
import {getUsers} from "../src/utils/services/User.service";

describe('getUsers', () => {
    let fetchMock: ReturnType<typeof vi.fn>

    beforeEach(() => {
        fetchMock = vi.fn();
        vi.stubGlobal('fetch', fetchMock);
    })

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should fetch and return users data', async () => {
        const mockUsers = [
            {id: 1, name: 'Jean Michel', username: 'Jean Mich', email: 'michmich@mail.fr'},
            {id: 2, name: 'Jean Michelline', username: 'Jean Mich', email: 'michmich@mail.fr'}
        ];

        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: vi.fn().mockResolvedValueOnce(mockUsers)
        });

        const result = await getUsers();

        expect(result).toEqual(mockUsers);
        expect(fetchMock).toHaveBeenCalledOnce();
        expect(fetchMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
    });

    it('should throw an error if fails', async () => {
        fetchMock.mockResolvedValueOnce({
            ok: false,
            statusText: 'Internal Server Error'
        });

        await expect(getUsers()).rejects.toThrow('Failed to fetch users')
    })


});