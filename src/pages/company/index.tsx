import { Grid, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import type { CompanyType } from "../../utils/types";
import { SnackAlertAddedCompany } from "../../components/snack-bar";
import { useAppDispatch, useAppSelector } from "../../stores";
import { addCompany } from "../../stores/thunk/companyThunk";

interface AddCompanyFormProps {
  handleNewClose: () => void;
}
export default function AddCompanyForm({
  handleNewClose,
}: AddCompanyFormProps) {
  const dispatch = useAppDispatch();
  const { companyList } = useAppSelector((state) => state.companyReducer);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyType>({
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      name: "",
    },
  });

  const onSubmit = (data: CompanyType) => {
    dispatch(addCompany({ ...data, id: `${companyList?.length + 1}` }));
    handleNewClose();
    SnackAlertAddedCompany();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid size={{ md: 12 }} textAlign="center">
          Add New Company
        </Grid>

        {/* Email */}
        <Grid size={{ md: 4, xs: 12 }}>Email</Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Email"
                fullWidth
                size="small"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>

        {/* First Name */}
        <Grid size={{ md: 4, xs: 12 }}>First Name</Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Controller
            name="first_name"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="First Name"
                fullWidth
                size="small"
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
              />
            )}
          />
        </Grid>

        {/* Last Name */}
        <Grid size={{ md: 4, xs: 12 }}>Last Name</Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Controller
            name="last_name"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Last Name"
                fullWidth
                size="small"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
              />
            )}
          />
        </Grid>

        {/* User Name */}
        <Grid size={{ md: 4, xs: 12 }}>User Name</Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "User name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="User Name"
                fullWidth
                size="small"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        {/* Submit Button */}
        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained">
            Add New Company
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
