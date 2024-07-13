import { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Typography from '../../Components/Typography'

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='flex items-center flex-col p-7'>
            <form>
                <Typography variant='h1'>
                    SingIn
                </Typography>
                <div>
                    <Typography variant='label' className={'my-5 block'}>
                        <Input
                            setValue={setUserName}
                            placeholder="user name"
                            type='text'
                        />
                    </Typography>
                    <Typography variant='label' className={'my-5 block'}>
                        <Input
                            setValue={setPassword}
                            placeholder="password"
                            type='password' />
                    </Typography>
                    <Button color={'bg-green-400'}>
                        SingIn
                    </Button>
                </div>
            </form>
            <Typography>
                or SingIn with
            </Typography>
            <div className='flex justify-center gap-1'>
                <Button color={'bg-green-400'} size="w-12">
                    fa
                </Button>
                <Button color={'bg-green-400'} size="w-12">
                    go
                </Button>
                <Button color={'bg-green-400'} size="w-12">
                    ln
                </Button>
            </div>
            <br />
            username : {userName}
            <br />
            password : {password}
        </div>
    )
}

export default LoginForm