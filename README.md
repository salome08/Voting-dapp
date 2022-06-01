1) We want the ability to accept proposal and store them
  proposal: their name, number

2) Voters and voting ability
  keep track of vote
  check voters areauthenticated to vote

3) chairman
  authenticate and deploy contract

# Run contract
  * Use Remix ethereum ide to run the contract
  
  * Run npm install on project
  
  * Submit proposal
  To submit proposals, the contract takes bytes32 so you need to enter ["Byte32", "Byte32", ...]
  To do so you need to convert your strings into bytes32 with the script: 
    String to Bytes32: node scripts/transform/createBytes.js [your string]
    Bytes32 to String: node scripts/transform/parseBytes.js [your bytes32]
    
  
  * Give right to vote with cahirman account to voters account
    vote takes integer for matching proposal (array starts at 0)

  * Vote with allowed voter account

  * Get the voting result
