function Error({statusCode}){
    return(
        <p>
            {
                statusCode ? 
                    `An error occured with status code: ${statusCode}` : 
                    'An error occured on the client'
            }
        </p>
    )

}
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error