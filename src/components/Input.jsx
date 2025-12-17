export const Input = ({ onChangeHandler, formData, name, placeholder, type, message, ...props }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={` input-dark ${formData[name].isValid ? "bg-[var(--color-input-bg)]  text-[var(--color-text-primary)] border-[1px] border-white/10 placeholder-[var(--color-text-muted)]" : "bg-red-400 border-red-300 text-white placeholder-white"}`}
                name={name}
                value={formData[name].value}
                onChange={onChangeHandler}
                {...props}
            />
            {!formData[name].isValid && <span className="text-red-500 text-sm">{message}</span>}
        </div>

    )
}