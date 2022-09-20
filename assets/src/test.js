import React from 'react'

function Test() {
    return (
        <>
            <form method='GET' action='login'>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email address" />
                    <div class="invalid-feedback" v-if="formErrors.emailAddress">Please provide a valid email address.</div>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" />
                    <div class="invalid-feedback" v-if="formErrors.password">Please enter your password.</div>
                </div>
                <button type='submit'>button</button>
            </form>
        </>
    )
}

export default Test