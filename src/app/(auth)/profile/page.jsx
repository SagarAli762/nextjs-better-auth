"use client";

import { updateUser } from "@/lib/auth.client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";

export default function ProfilePage() {
  const handleUpdatedUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    const resData = await updateUser({
      name: userData.name,
    });
    console.log("after updated profile ", resData);
  };

  return (
    <Form className="w-full max-w-96" onSubmit={handleUpdatedUser}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button
            size="sm"
            type="submit"
            onPress={() => {
              const id = toast.success("You have upgraded your profile", {
                actionProps: {
                  children: "Billing",
                  className: "bg-success text-success-foreground",
                  onPress: () => toast.close(id),
                },
                description: "You can continue using HeroUI Chat",
              });
            }}
          >
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
