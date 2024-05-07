import React from 'react'

const Input = ({ label, onChange, value, id, pleasholder, type }) => {
    return (
        <div>
            {label ? <label htmlFor={id}>{label}</label> : ""}
            <input type={type} id={id} pleasholder={pleasholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input