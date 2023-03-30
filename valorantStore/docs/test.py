#from logging import _Level
import valo_api


#valo_api.set_api_key()

def accountDetails():
    userName = "dawgie"
    userTag = "sadge"
    details = valo_api.get_account_details_by_name(version = 'v1', name = userName, tag = userTag, force_update = False)
    accountLevel = details.account_level
    playerCard = details.card
    region = details.region
    lastUpdate = details.last_update
    print(lastUpdate)



def main():
    print("hello\n")
    accountDetails()
    return 0

main()
