import UserProfileCard from "./UserProfileCard";
import Grid from "@mui/material/Grid";
import "./UserStack.css";

export default function UserStack() {
  return (

    <Grid container spacing={0.2} className="user-stack">
      <Grid size={4}>
        <UserProfileCard>size=2</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=2</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=2</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=2</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=2</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=8</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=8</UserProfileCard>
      </Grid>
      <Grid size={4}>
        <UserProfileCard>size=8</UserProfileCard>
      </Grid>
    </Grid>

  );
}
