import { useState } from 'react'
import Reveal from './Reveal'

const TIME_SLOTS = [
  { value: '17:00', label: '5:00 PM' },
  { value: '17:30', label: '5:30 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '18:30', label: '6:30 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '19:30', label: '7:30 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '20:30', label: '8:30 PM' },
]

function todayString() {
  const now = new Date()
  const month = `${now.getMonth() + 1}`.padStart(2, '0')
  const day = `${now.getDate()}`.padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function formatTime(value) {
  const [hours, minutes] = value.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const hour12 = hours % 12 === 0 ? 12 : hours % 12
  return `${hour12}:${`${minutes}`.padStart(2, '0')} ${period}`
}

export default function Reservation() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (name.trim().length < 2) {
      nextErrors.name = 'Please tell us your name.'
    }
    if (!date) {
      nextErrors.date = 'Please choose a date.'
    } else if (date < todayString()) {
      nextErrors.date = 'Please choose today or a future date.'
    }
    if (!time) {
      nextErrors.time = 'Please choose a time.'
    }
    if (!guests) {
      nextErrors.guests = 'Please choose a party size.'
    } else if (Number(guests) < 1 || Number(guests) > 8) {
      nextErrors.guests = 'We seat parties of up to 8.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setName('')
    setDate('')
    setTime('')
    setGuests('')
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="reserve" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-terracotta uppercase">
            Reservation
          </p>
          <h2 className="mt-3">Save your seat at the table.</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-cream-dark p-6 shadow-sm md:p-10">
            {submitted ? (
              <div className="text-center" role="status">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive">
                  <svg
                    className="h-8 w-8 text-cream"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-espresso">
                  You&apos;re booked, {name.trim().split(' ')[0]}.
                </h3>
                <p className="mt-4 text-lg text-espresso/80">
                  Table for {guests} on {date} at {formatTime(time)}. We&apos;ll
                  have the coffee ready.
                </p>
                <p className="mt-4 text-sm text-espresso/70">
                  This is a sample reservation form — no real table was booked.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-espresso bg-transparent px-7 py-3.5 text-lg font-semibold text-espresso transition hover:bg-espresso hover:text-cream"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="mb-2 block text-sm font-semibold tracking-wide text-espresso"
                    >
                      Name
                    </label>
                    <input
                      id="res-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ada Bloom"
                      className="w-full rounded-2xl border border-espresso/20 bg-cream px-5 py-3.5 text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:outline-none"
                    />
                    {errors.name ? (
                      <p className="mt-2 text-sm font-medium text-terracotta">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="res-date"
                      className="mb-2 block text-sm font-semibold tracking-wide text-espresso"
                    >
                      Date
                    </label>
                    <input
                      id="res-date"
                      name="date"
                      type="date"
                      value={date}
                      min={todayString()}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-2xl border border-espresso/20 bg-cream px-5 py-3.5 text-espresso focus:border-terracotta focus:outline-none"
                    />
                    {errors.date ? (
                      <p className="mt-2 text-sm font-medium text-terracotta">
                        {errors.date}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="mb-2 block text-sm font-semibold tracking-wide text-espresso"
                    >
                      Time
                    </label>
                    <select
                      id="res-time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-2xl border border-espresso/20 bg-cream px-5 py-3.5 text-espresso focus:border-terracotta focus:outline-none"
                    >
                      <option value="">Select a time…</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                    {errors.time ? (
                      <p className="mt-2 text-sm font-medium text-terracotta">
                        {errors.time}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="mb-2 block text-sm font-semibold tracking-wide text-espresso"
                    >
                      Guests
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-2xl border border-espresso/20 bg-cream px-5 py-3.5 text-espresso focus:border-terracotta focus:outline-none"
                    >
                      <option value="">Select a party size…</option>
                      {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                    {errors.guests ? (
                      <p className="mt-2 text-sm font-medium text-terracotta">
                        {errors.guests}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-lg font-semibold text-cream shadow-sm transition hover:bg-terracotta/90 sm:w-auto"
                  >
                    Request reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
