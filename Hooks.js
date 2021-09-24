//HOOKS

//useState y su equivalencia en clase
  const [loggedUser, setLoggedUser] = useState(undefined)
  // [this.state.loggedUser, this.setState({loggedUser: user})]

//Uso del setLoggedUser

  //loggedUser === undefined
  setLoggedUser("popino")
  //loggedUser === "popino"

//useEffect

  //componentDidUpdate
    //escucha cualquier cambio
    useEffect(() => {
      fetchUser()
    }) //sin array de dependencias

    //escucha cambios en props.match.params.id
    useEffect(() => {
      getSingleCoaster(props.match.params.id)
    }, [props.match.params.id])

  //componentDidMount
    useEffect(() => {
      fetchUser()
    }, []) //array vacío


  useEffect(() => {
    const intervalId = setInterval()

    //el return actua como el componentWillUnmount
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  

//useContext
//useRef