sudo apt update
curl -sSL https://get.docker.com/ | sudo sh
sudo apt install git -y
git clone -b master https://github.com/NorbertBaran/ardigen-github-search.git
cd ardigen-github-search
sudo docker compose up -d