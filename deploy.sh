#!/bin/bash

npm run build
rsync -a dist/ root@hallucination-viewer.ragfix.ai:/var/www/hallucination-viewer.ragfix.ai/