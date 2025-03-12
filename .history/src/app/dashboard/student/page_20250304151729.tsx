const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            <h1>Welcome to the Student Page</h1>
            {/* left */}
            <div className="w-full xl:w-2/3"> </div>
            {/* Right */}
            <div className="w-full xl:w-1/3">
                <Eve/>
            </div>
        </div>
    );
};

export default StudentPage;