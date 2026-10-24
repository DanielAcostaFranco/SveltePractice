<script lang="ts">
    import InlineField from './InlineField.svelte'
    import {useInlineEdit} from '../../components/useInlineEdit.svelte'

    const user = {
        name: 'Daniel',
        email: 'daniel@gmail.com',
        bio: 'I am a software developer.'
    }

    function saveProfile(profile: typeof user) {
        console.log('Saving profile:', profile)
    }

    const edit = useInlineEdit(user, saveProfile)

</script>

<InlineField label="Name" bind:value={edit.draft.name} type="text" />
<InlineField label="Email" bind:value={edit.draft.email} type="email" />
<InlineField label="Bio" bind:value={edit.draft.bio} type="textarea" />

{#if edit.isDirty()}
    <div class="actions">
        <button type="button" onclick={edit.save}>
            Save
        </button>

        <button type="button" onclick={edit.cancel}>
            Cancel
        </button>
    </div>
{/if}
