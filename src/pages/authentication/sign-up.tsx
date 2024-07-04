/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, type FC } from "react";
import './sign-up.css'



const SignUpPage: FC = function () {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });
  

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear previous errors when user starts typing
    setErrors({ 
      ...errors,
      [name]: ""
    });
    // Set the field as touched when user starts typing
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = (field: string) => {
    // Set the field as touched when user moves away from the input box
    setTouched({
      ...touched,
      [field]: true
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    let formValid = true;
    const newErrors = { ...errors };

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Invalid email";
      formValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      formValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      formValid = false;
    }

    if (!formData.acceptTerms) {
      formValid = false;
      // You can customize this message according to your requirement
      alert("Please accept terms and conditions");
    }

    setErrors(newErrors);

    if (formValid) {
      // Submit form or perform further actions
      console.log("Form submitted successfully");
    }
  };
  
  return (

    <div
      className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/929368282/photo/contemporary-workspace-with-books-colour-pencils-gadgets-and-supplies-workspace-and-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=fO5YA9FNJRNRhEPJk512sbdZEaZ8CjfKu86n-6u9Yqg=")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:'100vh'
      }}
    >
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
         
        </span>
      </div>
      <Card
        horizontal
        // imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
        Create New Account        
        </h1>
        <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-y-3">
                <Label htmlFor="email">Your email</Label>
                <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              style={{ boxShadow: touched.email && formData.email.trim() === "" ? "0 0 0 1px red" : "none" }}
            />
            {touched.email && formData.email.trim() === "" && <p className="text-red-500">Please enter your email</p>}
            {errors.email && <p className="text-red-500">{errors.email}</p>} 
              </div>
              <div className="mb-4 flex flex-col gap-y-3">
                <Label htmlFor="password">Your password</Label>
                <TextInput
              id="password"
              name="password"
              placeholder="••••••"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur("password")}
              style={{ boxShadow: touched.password && formData.password.trim() === "" ? "0 0 0 1px red" : "none" }}
            />
            {touched.password && formData.password.trim() === "" && <p className="text-red-500">Please enter your password</p>}
            {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <div className="mb-4 flex flex-col gap-y-3">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <TextInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={() => handleBlur("confirmPassword")}
              style={{ boxShadow: touched.confirmPassword && formData.confirmPassword.trim() === "" ? "0 0 0 1px red" : "none" }}
            />
            {touched.confirmPassword && formData.confirmPassword.trim() === "" && <p className="text-red-500">Please confirm your password</p>}
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
              </div>
              <div className="mb-4 flex items-center gap-x-3">
                <Checkbox
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, acceptTerms: e.target.checked })
                  }
                />
                <Label htmlFor="acceptTerms">
                  I accept the&nbsp;
                  <a href="#" className="text-primary-700 dark:text-primary-200">
                    Terms and Conditions
                  </a>
                </Label>
              </div>
              <div className="mb-7">
                <Button type="submit" className="w-full lg:w-auto">
                  Create account
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Already have an account?&nbsp;
                <a href="/authentication/sign-in" className="text-primary-600 dark:text-primary-200">
                  Login here
                </a>
              </p>
        </form>

      </Card>
    </div>
  );
};

export default SignUpPage;
  






