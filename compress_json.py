#!/usr/bin/env python3

import bz2
import glob
import gzip
import os
import os.path
import lzma as xz
import sys
import zipfile

def json_files(source_dir):
    for f in glob.glob(os.path.join(source_dir, "*")):
        if f.endswith(".json"):
            yield f

def main():
    source_dir = os.path.join(os.getcwd(), sys.argv[1])

    os.chdir(source_dir)

    for f in json_files(source_dir):
        file_root = os.path.splitext(f)[0]

        # .ZIP
        zip_file_name = file_root + '.json.zip'
        zip_out = zipfile.ZipFile(zip_file_name, 'w')
        zip_out.write(f, compress_type=zipfile.ZIP_DEFLATED, arcname=os.path.basename(f))
        zip_out.close()

        # .GZ
        gz_file_name = file_root + ".json.gz"
        gz_file_path = os.path.join(source_dir, gz_file_name)
        with open(f, 'rb') as f_in, gzip.open(gz_file_path, 'wb') as f_out:
            f_out.writelines(f_in)

        # .BZ2
        bz_file_name = file_root + ".json.bz2"
        bz_file_path = os.path.join(source_dir, bz_file_name)
        with open(f, 'rb') as f_in, open(bz_file_path, 'wb') as f_out:
            f_out.write(bz2.compress(f_in.read(), 9))

        # .XZ
        xz_file_name = file_root + ".json.xz"
        xz_file_path = os.path.join(source_dir, xz_file_name)
        with open(f, 'rb') as f_in, open(xz_file_path, 'wb') as f_out:
            f_out.write(xz.compress(f_in.read()))

        print("Compressed " + os.path.basename(f))

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: " + sys.argv[0] + " <json_directory>")
        sys.exit()
    main()
