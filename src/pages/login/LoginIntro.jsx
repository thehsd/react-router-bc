import Button from '../../Components/Button'
import Typography from '../../Components/Typography'

const LoginIntro = () => {
    return (
        <div className='bg-green-400 hidden md:flex flex-col items-center justify-center p-5'>
            <Typography variant='h2' className="text-3xl mb-10 text-white">
                welcome back!
            </Typography>
            <Typography className="text-white mb-10 text-center	">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptas aut dignissimos minus assumenda eligendi ea inventore recusan
            </Typography>
            <Button color={'bg-green-300'} size={'size-fit'}>
                no account yet? singUp
            </Button>
        </div>
    )
}

export default LoginIntro