import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";
import { toast } from "react-toastify";

export const ProtectedAdmin = ({ children }) => {
  const [FirstLoad, setFirstLoad] = useState(false);
  const navigate = useNavigate();

  const tokenAdmin = CookiesStorage.get(CookiesKey.TokenAdmin);

  useEffect(() => {
    if (tokenAdmin == undefined) {
      setFirstLoad(true);
    }
  }, []);

  useEffect(() => {
    if (FirstLoad) {
      toast.warn("Please Login Now");
      navigate("/admin/login");
    }
  }, [FirstLoad]);
  return children;
};
