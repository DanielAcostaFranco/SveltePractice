import { useEffect, useRef, useState } from 'react'

interface InlineFieldProps {
  label: string
  value: string
  type: 'text' | 'email' | 'textarea'
  onChange: (value: string) => void
}

function InlineField({ label, value, type, onChange }: InlineFieldProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [originalValue, setOriginalValue] = useState(value)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  function startEdit() {
    setOriginalValue(value)
    setIsEditing(true)
  }

  function commitEdit() {
    setIsEditing(false)
    buttonRef.current?.focus()
  }

  function cancelEdit() {
    onChange(originalValue)
    setIsEditing(false)
    buttonRef.current?.focus()
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.key === 'Escape') {
      cancelEdit()
    } else if (event.key === 'Enter' && event.currentTarget instanceof HTMLInputElement) {
      commitEdit()
    }
  }

  return (
    <div className="field">
      <span>{label}</span>
      {isEditing ? (
        type === 'textarea' ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={commitEdit}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            aria-label={label}
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={commitEdit}
            onKeyDown={handleKeyDown}
          />
        )
      ) : (
        <button type="button" aria-label={`Edit ${label}`} ref={buttonRef} onClick={startEdit}>
          {value}
        </button>
      )}
    </div>
  )
}

export default InlineField
