import { useState } from 'react'
import InlineField from './InlineField'

interface User {
  name: string
  email: string
  bio: string
}

const initialUser: User = {
  name: 'Daniel',
  email: 'daniel@gmail.com',
  bio: 'I am a software developer.',
}

function UserProfile() {
  const [saved, setSaved] = useState(initialUser)
  const [draft, setDraft] = useState(initialUser)
  const isDirty = JSON.stringify(draft) !== JSON.stringify(saved)

  function updateField(field: keyof User, value: string) {
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function save() {
    console.log('Saving profile:', draft)
    setSaved({ ...draft })
  }

  function cancel() {
    setDraft({ ...saved })
  }

  return (
    <>
      <InlineField label="Name" value={draft.name} onChange={(value) => updateField('name', value)} type="text" />
      <InlineField label="Email" value={draft.email} onChange={(value) => updateField('email', value)} type="email" />
      <InlineField label="Bio" value={draft.bio} onChange={(value) => updateField('bio', value)} type="textarea" />

      {isDirty && (
        <div className="actions">
          <button type="button" onClick={save}>Save</button>
          <button type="button" onClick={cancel}>Cancel</button>
        </div>
      )}
    </>
  )
}

export default UserProfile
