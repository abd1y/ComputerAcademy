import React from "react";
import { Link } from "react-router-dom";
export default function BackPostDocement() {
  return (
    <div className="BackPostDocement">
      <Link to={"/"}>
        <div className="BacktoHome">
          <i class="ri-arrow-go-forward-line"></i>
        </div>
      </Link>
    </div>
  );
}