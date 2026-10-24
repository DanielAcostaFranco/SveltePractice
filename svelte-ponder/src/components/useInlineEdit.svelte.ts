export function useInlineEdit<T extends object>(
    original: T,
    onSave: (value: T) => void
) {
    let saved = $state<T>({ ...original })
    let draft = $state<T>({ ...original })

    function isDirty() {
        return JSON.stringify(draft) !== JSON.stringify(saved)
    }

    function save() {
        onSave({ ...draft })
        Object.assign(saved, draft)
    }

    function cancel() {
        Object.assign(draft, saved)
    }

    return {
        draft,
        isDirty,
        save,
        cancel
    }
}