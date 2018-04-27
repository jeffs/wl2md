FROM node
RUN ["git", "clone", "--recurse-submodules", "https://github.com/jeffs/wl2md.git"]
WORKDIR /wl2md/submodules/webloc-parser
RUN ["npm", "install"]
WORKDIR /
ENTRYPOINT ["node", "wl2md/index.js"]
