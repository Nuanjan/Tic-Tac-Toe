
API='https://tic-tac-toe-wdi.herokuapp.com'
URL_PATH='/games/'

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header 'Content-Type: application/json' \
  --header "authorization: Token token=${TOKEN}" \

echo
