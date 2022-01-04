import { useEffect, useState } from "react";
import { entryApi } from "../shared/EntryApi";

// API to get Entry, Book or Author passing the path.

export function useEntryApi<T>(path: string): T | undefined {
    const [state, setState] = useState<T>()
    useEffect(() => {
        entryApi<T>('get', path, setState)
    }, [path])
    return state

}