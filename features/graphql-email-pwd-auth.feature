Feature: Email Password Authorization
    In order to create an application
    I need to have an account so that 
    I can log in and be identified with a token

    Scenario: Create Account (email and password)
        Given the "applicants" collection is empty
        And the following "newApplicant" variables:
        | email         | password   | first | last |
        | test@test.com | P@$$w0rd1- | Test  | User |
        When I send the following mutation:
            """
            mutation newUser($newApplicant:CreateAccountInput!) {
                createAccount(newApplicant:$newApplicant) {
                    user {
                        email
                        name {
                            first
                            last
                        }
                    }
                }
            }
            """
        Then there should be no errors   
        And I should receive the following data payload:
            """
            {
                "createAccount": {
                    "user": {
                        "email": "test@test.com",
                        "name": {
                            "first": "Test",
                            "last": "User",
                            "__typename": "FullName"
                        },
                        "__typename": "User"
                    }, 
                    "__typename": "AuthorizationPayload"
                }
            }
            """