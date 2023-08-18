'use client'

import countries from './countries.json'

function addOptionContent({ target }) {
  const options = Array.from(target.options)
  options.forEach(item => item.textContent = item.dataset.name)
}

function removeOptionContent({ target }) {
  const options = Array.from(target.options)
  options.forEach(item => item.textContent = `${item.dataset.flag} ${item.value}`)
}

export default function PhoneInput({ title, name, required = true }) {
	return(
		<div>
      <label htmlFor={name} className="block font-semibold text-neutral-600">
        {title} {required ? '*' : null}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            onFocus={addOptionContent}
            onBlur={removeOptionContent}
            onChange={e => e.target.blur()}
            autoComplete="country"
            className="h-full w-28 py-0 pl-3 border-gray-300 border bg-white rounded-l-md outline-none focus:ring-blue-600 focus:border-blue-600"
          >
            {countries.map(country => (
              <option key={country.iso_code} data-name={country.name} data-flag={country.flag_emoji} value={country.mobile_code}>
                {country.flag_emoji} {country.mobile_code}
              </option>
            ))}
          </select>
        </div>
        <input
          type="tel"
          required={required}
          name={name}
          id={name}
          className="block w-full py-2 pl-32 border-gray-300 border rounded-md outline-none focus:ring-blue-600 focus:border-blue-600"
          placeholder="555 987 6543"
        />
      </div>
    </div>
	)
}