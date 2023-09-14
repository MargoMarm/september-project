import { TextInput, Form, ShowPasswordBtn } from './AuthForm.styled';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function AuthForm() {
  return (    
      <Form>
        <TextInput type="text" placeholder='name'/>
        <TextInput type="email" placeholder='email'/>
        <TextInput type="password" placeholder='password' />
        {/* <ShowPasswordBtn>
          <VisibilityOutlinedIcon />
        </ShowPasswordBtn>      */}
      </Form>    
  );
}
