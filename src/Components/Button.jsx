
function Button({ children, color, size = 'w-32 ' }) {
    return (
        <button className={`${color} ${size} rounded-xl border-none p-4`}>
            {children}
        </button>
    )
}

export default Button