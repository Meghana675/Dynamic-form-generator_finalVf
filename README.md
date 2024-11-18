## Dynamic Form Generator
## Description
The Dynamic Form Generator is a React-based application that dynamically generates forms based on a provided JSON schema. The application features a split-screen interface where users can edit the schema in real-time on one side and see the generated form on the other. It is designed with responsiveness, validation, and user experience in mind.

## Setup Instructions
1. Clone the repository.
2. Install dependencies
3. Start the development server

## Example JSON Schema
Refer to the `sample-schema.json` file for an example.
 {
        id: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        id: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "you@example.com"
      }
    ]
  }, null, 2));

## Testing
The application includes testing for:
-JSON validation and error scenarios.
-Form validation and submission.
-Responsiveness and real-time updates.

## Deployment
The application is deployed on Netlify:
https://dynamic-form-generator675.netlify.app/
