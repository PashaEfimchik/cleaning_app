export const cancellationPolicyScenarios = [
    {
        scenario: "Scenario 1: Cancelling a Cleaning Appointment",
        description: "Scenario 1"
    },
    {
        scenario: "Scenario 2: Changing the Start Time of a Cleaning Appointment",
        description: "If Lloyd makes this change within 1 hour of booking or before 9 am on Saturday, he won’t face any unused time fees, and the total cost will remain at €150 for Tuesday only.\n" +
            "Lloyd has scheduled a cleaning appointment at 9 am on Monday for €150. Later, he decides to postpone the entire booking to Tuesday.\n" +
            "If he makes the change between 9 am on Saturday and 9 am on Sunday, an unused time fee of 50% of the reserved time applies. This results in a €75 charge for the unused time on Monday, in addition to the €150 for Tuesday.\n" +
            "If the change occurs after 9 am on Sunday, an unused time fee of 100% of the reserved time, up to 12 hours, is incurred. In this case, the maximum charge of €150 is added to the €150 for Tuesday."
    },
    {
        scenario: "Scenario 3: Changing the Start Time of a Cleaning Appointment (Late Notice)",
        description: "Scenario 3"
    },
]