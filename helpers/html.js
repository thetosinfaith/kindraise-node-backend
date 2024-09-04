const signUpTemplate = (verifyLink, fullName) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>hurray!!! you've successfully signed-up as a </title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            background-color: #fff;
          }
          .header {
            background: #007bff;
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            color: #fff;
          }
          .content {
            padding: 20px;
            color: #333;
          }
          .footer {
            background: #333;
            padding: 10px;
            text-align: center;
            border-top: 1px solid #ddd;
            font-size: 0.9em;
            color: #ccc;
          }
          .button {
            display: inline-block;
            background-color: #ff9900;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Kind raise serves you best!</h1>
          </div>
          <div class="content">
            <p>congratulation ${fullName},</p>
            <p>Thank you for joining our community! We're happy to have you with us.</p>
            <p>Please click the button below to verify your account:</p>
            <p>
              <a href="${verifyLink}" class="button">Verify My Account</a>
            </p>
            <p>If you did not create an account, please, kindly ignore this email.</p>
            <p>Best of luck,<br>kind raise team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()}  kindRaise team.. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };
  
  
  const verifyTemplate = (verifyLink, fullName) => {
      return `
      <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>HURRAY!!! congratulation,welcome to THE CURVE TO-DO APP</title>
      <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        background-color: #fff;
      }
      .header {
        background: #007bff;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        color: #fff;
      }
      .content {
        padding: 20px;
        color: #333;
      }
      .footer {
        background: #333;
        padding: 10px;
        text-align: center;
        border-top: 1px solid #ddd;
        font-size: 0.9em;
        color: #ccc;
      }
      .button {
        display: inline-block;
        background-color: #ff9900;
        color: #fff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
      }
      </style>
      </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Verify Your Account</h1>
        </div>
        <div class="content">
          <p>Hello ${fullName},</p>
          <p>We're excited to have you on board! Please click the button below to verify your account:</p>
          <p>
            <a href="${verifyLink}" class="button">Verify My Account</a>
          </p>
          <p>If you did not create an account, please ignore this email.</p>
          <p>Best of luck,<br>Isah's co-operation</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()}  Isah Abdulwahab Enterprise.. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
  const forgotPasswordTemplate = (resetLink, firstName) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            background-color: #fff;
          }
          .header {
            background: #007bff;
            padding: 10px;
            text-align: center; 
            border-bottom: 1px solid #ddd;
            color: #fff;
          }
          .content {
            padding: 20px;
            color: #333;
          }
          .footer {
            background: #333;
            padding: 10px;
            text-align: center;
            border-top: 1px solid #ddd;
            font-size: 0.9em;
            color: #ccc;
          }
          .button {
            display: inline-block;
            background-color: #ff9900;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Reset Your Password</h1>
          </div>
          <div class="content">
            <p>Hello ${firstName},</p>
            <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
            <p>Click the button below to reset your password:</p>
            <p>
              <a href="${resetLink}" class="button">Reset Password</a>
            </p>
            <p>Best regards,<br> kind raise Team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()}  kindRaise co-operation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };
//   const forgotPasswordTemplate = (resetLink, fullName) => {
//      return `

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Reset Your Password</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             color: #333;
//             background-color: #f7f7f7;
//             margin: 0;
//             padding: 0;
//         }
//         .container {
//             max-width: 600px;
//             margin: 40px auto;
//             padding: 20px;
//             border: 1px solid #ddd;
//             border-radius: 10px;
//             box-shadow: 0 0 10px rgba(0,0,0,0.1);
//             background-color: #fff;
//         }
//         .header {
//             background: #007bff;
//             padding: 10px;
//             text-align: center;
//             border-bottom: 1px solid #ddd;
//             color: #fff;
//         }
//         .content {
//             padding: 20px;
//             color: #333;
//         }
//         .footer {
//             background: #333;
//             padding: 10px;
//             text-align: center;
//             border-top: 1px solid #ddd;
//             font-size: 0.9em;
//             color: #ccc;
//         }
//         .button {
//             display: inline-block;
//             background-color: #ff9900;
//             color: #fff;
//             padding: 10px 20px;
//             text-decoration: none;
//             border-radius: 5px;
//         }
//         form {
//             margin-top: 20px;
//         }
//         .form-group {
//             margin-bottom: 15px;
//         }
//         .form-group label {
//             display: block;
//             margin-bottom: 5px;
//         }
//         .form-group input {
//             width: 100%;
//             padding: 8px;
//             box-sizing: border-box;
//         }
//         .form-group button {
//             background-color: #007bff;
//             color: #fff;
//             padding: 10px 15px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//         }
//         .form-group button:hover {
//             background-color: #0056b3;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Reset Your Password</h1>
//         </div>
//         <div class="content">
//             <p>Hello ${firstName},</p>
//             <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
//             <p>Use the form below to enter your new password:</p>
//             <form action="${resetLink}" method="POST">
//                 <div class="form-group">
//                     <label for="newPassword">New Password:</label>
//                     <input type="password" id="newPassword" name="newPassword" required>
//                 </div>
//                 <div class="form-group">
//                     <button type="submit">Reset Password</button>
//                 </div>
//             </form>
//             <p>Best regards,<br>kindRaise Team</p>
//         </div>
//         <div class="footer">
//             <p>&copy; ${new Date().getFullYear()} KindRaise digital platform. All rights reserved.</p>
//         </div>
//     </div>
// </body>
// </html>
// `;
  //}

  
  module.exports = { signUpTemplate,verifyTemplate,forgotPasswordTemplate};
  