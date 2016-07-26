rem ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -f hls -hls_time 5 output.m3u8 

rem ffmpeg -i 1.mp4 -c copy -f segment -segment_list playlist.m3u8 -segment_time 10 output.ts

ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -preset ultrafast -flags -global_header -f hls -hls_time 5 -hls_wrap 5 output.m3u8

pause

