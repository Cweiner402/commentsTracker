
import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import { useAuth } from '@/lib/auth'
import {Text, Code} from '@chakra-ui/react'

const Home = () => {

  const auth = useAuth();
  return (
    <div>
      <main>
        <h1>
        Started here
        </h1>

         <Heading>Fast Feedback</Heading>
         <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text> 
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  )
}

export default Home;