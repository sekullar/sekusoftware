import "../../../css/Loading.css"


const Loading = () => {

    return(
        <>
            <div className="fixed flex justify-center items-center h-screen w-full z-50">
                <div className="loader"></div> 
            </div>
        </>
    )
}

export default Loading