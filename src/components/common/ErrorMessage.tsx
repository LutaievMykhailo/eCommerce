

type ErrorMessageProps={
    message?: string;
    onRetry: ()=>void;
}

function ErrorMessage({message, onRetry}: ErrorMessageProps) {
    return (
        <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-bold text-[#111827]">
                    Something went wrong
                </h2>

                <p className="text-sm text-[#6B7280] mt-2">
                    {message}. Please try again.
                </p>

                <button className="mt-5 px-5 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA]" onClick={onRetry}>
                    Try again
                </button>
            </div>
        </div>
    )
}

export default ErrorMessage