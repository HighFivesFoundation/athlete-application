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

    # Scenario: Authorize Account (email and password)
    #    Given the "applicants" collection is empty
    #    And the following applicant exists:
    #    | first | last    | email        | password  |
    #    | Bo    | Jackson | bo@bocan.com | P@$$w0rd1 | 
    #    And the following variables exist:
    #    | email        | password  |
    #    | bo@bocan.com | P@$$w0rd1 | 
    #    When I send the following mutation:
    #         """
    #         mutation auth($email:String! $password:String!) {
    #             authorize(email:$email password:$password) {
    #                 token
    #             }
    #         }
    #         """
    #    Then I should recieve a token
    #    When I add the token to Authorization headers
    #    And I send the following query:
    #         """
    #         query {
    #             me {
    #                 email
    #                 name {
    #                     first
    #                     last
    #                 }
    #             }
    #         }
    #         """ 
    #     Then there should be no errors   
    #     And I should receive the following data payload:
    #         """
    #         {
    #             "me": {
    #                 "email": "bo@bocan.com",
    #                     "name": {
    #                         "first": "Bo",
    #                         "last": "Jackson"
    #                     }
    #                 }
    #             }
    #         }
    #         """    
  