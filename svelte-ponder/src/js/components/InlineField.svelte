<script lang="ts">
    interface Props {
        label: string
        value: string
        type: string
    }

    let {
        label,
        value = $bindable(),
        type
    }: Props = $props()

    let isEditing: boolean = $state(false)
    let originalValue: string = $state('')
    let buttonRef = $state<HTMLButtonElement | null>(null)

    function startEdit() {
        originalValue = value
        isEditing = true
    }

    function commitEdit() {
        isEditing = false
        buttonRef?.focus()
    }

    function cancelEdit() {
        value = originalValue
        isEditing = false
        buttonRef?.focus()
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            cancelEdit()
            return
        }

        if (
            event.key === 'Enter' &&
            event.currentTarget instanceof HTMLInputElement
        ) {
            commitEdit()
        }
    }
    
</script>


<div class="field">
    <span>{label}</span>

    {#if isEditing}
        {#if type === 'textarea'}
            <textarea
                aria-label={label}
                autofocus
                bind:value
                onblur={commitEdit}
                onkeydown={handleKeyDown}
            ></textarea>
        {:else}
            <input
                aria-label={label}
                autofocus
                type={type}
                bind:value
                onblur={commitEdit}
                onkeydown={handleKeyDown}
            />
        {/if}
    {:else}
        <button type="button" 
        aria-label={`Edit ${label}`}
        bind:this={buttonRef}
        onclick={startEdit}
        >
            {value}
        </button>
    {/if}
</div>


<style>
    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
    }

    input,
    textarea {
        font: inherit;
        padding: 0.5rem;
        width: 100%;
        box-sizing: border-box;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        text-align: left;
        cursor: pointer;
    }

    button:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
    }

</style>