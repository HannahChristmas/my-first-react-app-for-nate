const LandingPageComponent = (props) => {
    const {pageTitle} = props
    return(
        <>
            <p>{pageTitle}</p>
            <img src={require('../assets/logo192.png')} />
        </>
    )
}

export default LandingPageComponent;
