Feature: Initial Sample
    In order to setup continuous delivery
    I need a sample scenario that I can watch pass

    Scenario: Sample
        When I send the following query:
            """
            query {
                me {
                    name {
                        first
                        last
                    }
                }
            }
            """
        Then I should receive the following data payload:
            """
            {
                "me": {
                    "__typename": "User",
                    "name": {
                        "__typename": "FullName",
                        "first": "Hello World",
                        "last": "Hello World"
                    }
                }
            }
            """
        And there should be no errors


