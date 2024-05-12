import React from "react";
import { useUser } from "../providers/UserProvider";

export default function CustomProfilePage() {
  const { user } = useUser();
  return <div>CustomProfilePage</div>;
}
