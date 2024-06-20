import {useState} from 'react';

const STORAGE_KEY = 'username';

export const useLocalStorageName = () => {
    const [username, setUsername] = useState<string | null>(() => {
        const username = localStorage.getItem(STORAGE_KEY);
        return username ? username : null;
    });

    const updateUsername = (newUsername: string) => {
        setUsername(newUsername);
        localStorage.setItem(STORAGE_KEY, newUsername);
    };

    const removeUsername = () => {
        setUsername(null);
        localStorage.removeItem(STORAGE_KEY);
    };

    return {
        username,
        updateUsername,
        removeUsername
    }
}