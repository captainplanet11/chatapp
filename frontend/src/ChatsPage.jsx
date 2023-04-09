import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('662f82d5-d422-478d-998e-f5dbf169b4f3',props.user.username,props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height: '100%'}}/>
    </div>
}

export default ChatsPage