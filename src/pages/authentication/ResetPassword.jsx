import './RestPassword.css';
import { Card } from 'flowbite-react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ResetPassword() {
  // hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  console.log('errors', errors);
  const onSubmit = (data) => console.log(data);
  const password = watch('password1');
  const confirmPassword = register("repeat_password", {
    validate: value =>
      value === password || "The passwords do not match"
  });

  return (
    <div className="RestPassword">
      <Card className="card" imgSrc="/images/authentication/reset-password.jpg" horizontal>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Change Password
          </h5>
        </div>

        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="New password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              className={errors.password1 ? 'error-border1' : ''}
              {...register('password1', {
                required: 'Password is required',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.,])[a-zA-Z0-9!@#$%^&.,]{6,16}$/,
                  message:
                    'Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special case character'
                }
              })}
            />
            <p>{errors.password1?.message}</p>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat_password" value="Confirm password" />
            </div>
            <TextInput
              id="repeat_password"
              type="password"
              className={errors.repeat_password ? 'error-border1' : ''}
              {...confirmPassword}
            />
            <p>{errors.repeat_password?.message}</p>
          </div>

          <Button type="submit">Reset password</Button>
        </form>
      </Card>
    </div>
  );
}

export default ResetPassword;
