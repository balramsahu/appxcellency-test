import { useForm, Controller } from "react-hook-form";
import {
    Grid,
    TextField,
    Select,
    MenuItem,
    Button,
    Avatar,
    FormHelperText
} from "@mui/material";
import type { UserType } from "../../utils/types";
import { FileField } from "../../components/fileField";
import { useState } from "react";

interface UserFormProps {
    header: string;
    formData: UserType;
    handleClose: () => void;
    onSubmit: (v: UserType) => void;
}
export default function UserForm({ header, formData, handleClose, onSubmit }: UserFormProps) {
    const { control, setValue, watch, handleSubmit } = useForm<UserType>({
        defaultValues: {
            id: formData?.id || undefined,
            avatar: formData?.avatar || undefined,
            email: formData?.email || "",
            first_name: formData?.first_name || "",
            last_name: formData?.last_name || "",
            name: formData?.name || "",
            role: formData?.role || formData?.roles?.[0] || "",
            roles: formData?.roles || [formData?.role] || [],
        }
    });


    const avatarFile = watch("avatar");
    const [image, setImage] = useState<File | null>(null);
    const onDropImage = (files: File[]) => {
        const file = files[0];
        setImage(file);
        setValue("avatar", file);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center">

                {/* Header */}
                <Grid size={{ md: 12, xs: 12 }} textAlign="center">
                    {header}
                </Grid>

                {/* Avatar Upload */}
                {formData?.avatar || image ? (
                    <>
                        <Grid size={{ md: 4, xs: 12 }}>
                            <Avatar src={`${image ? URL.createObjectURL(image) : formData?.avatar}`} sx={{ width: 80, height: 80 }} />

                        </Grid>
                        <Grid size={{ md: 8, xs: 12 }}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "#000" }}
                                component="label"
                            >
                                Upload
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files) {
                                            onDropImage(Array.from(e.target.files));
                                        }
                                    }}
                                />
                            </Button>
                        </Grid>
                    </>
                ) : (
                    <Grid size={{ xs: 12 }}>
                        {/* Custom file drop field */}
                        <FileField onDrop={(v: File[]) => onDropImage(v)} />
                    </Grid>
                )}
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
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                placeholder="Email"
                                fullWidth
                                size="small"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
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
                        render={({ field, fieldState }) => (
                            <TextField {...field} placeholder="First Name" fullWidth size="small"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
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
                        render={({ field, fieldState }) => (
                            <TextField {...field} error={!!fieldState.error}
                                helperText={fieldState.error?.message} placeholder="Last Name" fullWidth size="small" />
                        )}
                    />
                </Grid>

                {/* User Name */}
                <Grid size={{ md: 4, xs: 12 }}>User Name</Grid>
                <Grid size={{ md: 8, xs: 12 }}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field, fieldState }) => (
                            <TextField {...field} error={!!fieldState.error}
                                helperText={fieldState.error?.message} placeholder="User Name" fullWidth size="small" />
                        )}
                    />
                </Grid>

                {/* Role */}
                <Grid size={{ md: 4, xs: 12 }}>Role</Grid>
                <Grid size={{ md: 8, xs: 12 }}>
                    <Controller
                        name="role"
                        control={control}
                        rules={{ required: "Role is required" }}
                        render={({ field, fieldState }) => (
                            <>
                                <Select {...field} error={!!fieldState.error} size="small" fullWidth>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Editor">Editor</MenuItem>
                                    <MenuItem value="Viewer">Viewer</MenuItem>
                                </Select>
                                <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                            </>
                        )}
                    />
                </Grid>

                {/* Submit */}
                <Grid size={{ md: 6, xs: 12 }}>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Button type="submit" variant="contained" color="primary">Save Changes</Button>
                </Grid>
            </Grid>
        </form>
    );
}
