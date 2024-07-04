import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import "./CustomerDetails.css";
import { useForm } from "react-hook-form";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

function CustomerDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Custom validation rule to check if the entered date is in the future
  const futureDateValidator = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();

    if (selectedDate < today) {
      // return "Please select a future date.";
      alert("plase select future date");
    }

    return true;
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="form-div">
        <Card className="mt-5 p-5" style={{ width: "700px" }}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="namee" value="Your Name" />
              </div>
              <TextInput
                id="namee"
                type="text"
                placeholder="Customer Name"
                {...register("namee", { required: true })}
              />
              {errors.namee && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="datee" value="Proposed Date" />
              </div>
              <TextInput
                id="datee"
                type="date"
                {...register("datee", {
                  required: true,
                  validate: futureDateValidator,
                })}
              />
              {errors.datee && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>

            <div className="mb-2 block">
              <Label htmlFor="oems" value="Select Oem" />
            </div>
            <Select id="oems" {...register("oems", { required: true })}>
              <option value="" selected>
                Select oems
              </option>
              <option value="fg">fg</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            {errors.oems && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <div className="mb-2 block">
              <Label htmlFor="mc" value="Select M/C Model" />
            </div>
            <Select id="mc" {...register("mc", { required: true })}>
              <option value="" selected>
                Select mc Model
              </option>
              <option value="fg">fg</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            {errors.mc && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <div className="mb-2 block">
              <Label htmlFor="comp1" value="Select from Competiton 1" />
            </div>
            <Select id="comp1" {...register("comp1", { required: true })}>
              <option value="" selected>
                Select from Competiton 1
              </option>
              <option value="fg">fg</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            {errors.comp1 && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <div className="mb-2 block">
              <Label htmlFor="comp2" value="Select from Competiton 2" />
            </div>
            <Select id="comp2" {...register("comp2", { required: true })}>
              <option value="" selected>
                Select from Competiton 2
              </option>
              <option value="fg">fg</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            {errors.comp2 && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="engnamee" value="Engineer Name" />
              </div>
              <TextInput
                id="engnamee"
                type="text"
                placeholder="Engineer Name"
                {...register("engnamee", { required: true })}
              />
              {errors.engnamee && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>

            <Button className="bg-primary" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
      </NavbarSidebarLayout>
  );
}

export default CustomerDetails;
