rem ffmpeg -i 1.mp4 -c:v libx264 -c:a aac -f hls -hls_time 5 output.m3u8 

ffmpeg -i 1.mp4 -use_localtime 1 -hls_segment_filename 'file-%Y%m%d-%s.ts' out.m3u8

pause

