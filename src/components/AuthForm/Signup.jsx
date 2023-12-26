import { Button, InputRightElement, Input, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Signup () {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        value={inputs.email}
        size={'sm'}
        onChange={e => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder='Username'
        fontSize={14}
        type='text'
        value={inputs.username}
        size={'sm'}
        onChange={e => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder='Full Name'
        fontSize={14}
        type='text'
        value={inputs.fullName}
        size={'sm'}
        onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder='Password'
          fontSize={14}
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          size={'sm'}
          onChange={e => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h='full'>
          <Button
            variant={'ghost'}
            size={'sm'}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={'full'} colorScheme={'blue'} size={'sm'} fontSize={14}>
        Sign Up
      </Button>
    </>
  )
}
