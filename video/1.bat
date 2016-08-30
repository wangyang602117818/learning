
rem ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -strict -2 -f hls output.m3u8 

rem ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_list_size 0 -hls_time 5 output1.m3u8 

ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_list_size 0 -hls_time 5 ts\output1.m3u8

pause

